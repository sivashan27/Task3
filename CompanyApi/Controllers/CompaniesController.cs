using CompanyApi.Models;
using Newtonsoft.Json.Linq;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;
using System;

namespace CompanyApi.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CompaniesController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public HttpResponseMessage Get()
        {
            return new HttpResponseMessage()
            {
                Content = new StringContent(GetJsonFile(), Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public HttpResponseMessage Get(int id)
        {
            var json = GetJsonFile();
            //Parsing reading file
            var jsonObj = JObject.Parse(json);
            var companyOperationArr = jsonObj.GetValue("Companyoperations") as JArray;

            var company = companyOperationArr.FirstOrDefault(obj => obj["id"].Value<int>() == id);

            return new HttpResponseMessage()
            {
                Content = new StringContent(company.ToString(), Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="companyoperation"></param>
        /// <returns></returns>
        public HttpResponseMessage PostCompany(CompanyOpetation companyoperation)
        {
            //if (ModelState.IsValid)
            //{
                bool isEdited = false;
                JObject jResponse = new JObject();
                //Reading existing file
                var json = GetJsonFile();
                //Parsing reading file
                var jsonObj = JObject.Parse(json);
                var companyOperationArr = jsonObj.GetValue("Companyoperations") as JArray;

                #region EditOperation
                foreach (var company in companyOperationArr.Where(obj => obj["id"].Value<int>() == companyoperation.id))
                {
                    company["companyname"] = !string.IsNullOrEmpty(companyoperation.companyname) ? companyoperation.companyname : "";
                    company["operatingcountry"] = !string.IsNullOrEmpty(companyoperation.operatingcountry) ? companyoperation.operatingcountry : "";
                    company["business"] = !string.IsNullOrEmpty(companyoperation.business) ? companyoperation.business : "";
                    isEdited = true;
                    jResponse = JObject.FromObject(company);
                }
                #endregion
                #region AddOperation
                if (!isEdited)
                {
                    //Converting Modal object to JSON serilization
                    var newObj = new JavaScriptSerializer().Serialize(companyoperation);
                    var newOparation = JObject.Parse(newObj);
                    //Adding new object
                    companyOperationArr.Add(newOparation);
                    jResponse = newOparation;
                }
                #endregion
                //Appending new json array
                jsonObj["Companyoperations"] = companyOperationArr;
                //Seri
                string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj,
                               Newtonsoft.Json.Formatting.Indented);
                //Writing
                SaveJsonFile(jsonResult);
                //return StatusCode(HttpStatusCode.OK);
                return new HttpResponseMessage()
                {
                    Content = new StringContent(jResponse.ToString(), Encoding.UTF8, "application/json"),
                    StatusCode = HttpStatusCode.OK
                };
            //}
            //return new HttpResponseMessage()
            //{
            //    StatusCode = HttpStatusCode.OK
            //};

        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private string GetJsonFile()
        {
            return File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath(@"~/App_Data/companyOperation.json"));
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="jsonResult"></param>
        private void SaveJsonFile(string jsonResult)
        {
            File.WriteAllText(System.Web.HttpContext.Current.Server.MapPath(@"~/App_Data/companyOperation.json"), jsonResult);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IHttpActionResult DeleteCompany(int id)
        {
            var json = GetJsonFile();
            //Parsing reading file
            var jsonObj = JObject.Parse(json);
            var companyOperationArr = jsonObj.GetValue("Companyoperations") as JArray;

            var companyToDeleted = companyOperationArr.FirstOrDefault(obj => obj["id"].Value<int>() == id);
            if (companyToDeleted != null)
            {
                companyOperationArr.Remove(companyToDeleted);
                //Appending new json array
                jsonObj["Companyoperations"] = companyOperationArr;
                //Seri
                string jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj,
                               Newtonsoft.Json.Formatting.Indented);
                SaveJsonFile(jsonResult);
                return StatusCode(HttpStatusCode.OK);
            }
            return BadRequest(ModelState);
        }

    }
}
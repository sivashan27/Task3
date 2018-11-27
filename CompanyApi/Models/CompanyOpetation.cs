using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CompanyApi.Models
{
    public class CompanyOpetation
    {
        public int id { get; set; }
        public string companyname { get; set; }
        public string operatingcountry { get; set; }
        public string business { get; set; }
        public string customFields { get; set; }
    }
}
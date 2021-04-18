using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class BankDetailsDto
    {
        public int Id { get; set; }
        public string OwnerName { get; set; }
        public string BankName { get; set; }
        public int AccountNumber { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Picture { get; set; }
        public bool IsConfirmed { get; set; }
    }
}

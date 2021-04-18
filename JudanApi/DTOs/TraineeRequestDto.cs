using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class TraineeRequestDto
    {
        public int Id { get; set; }
        public int TrainerId { get; set; }
        public int TraineeId { get; set; }
        public bool IsOnline { get; set; }
        public string Platform { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Payment { get; set; }
        public string Type { get; set; }
    }
}

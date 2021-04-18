using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.Data
{
    public class Certification
    {
        public int Id { get; set; }
        public string uri { get; set; }
        public int TrainerId { get; set; }
        public int TraineeId { get; set; }
    }
}

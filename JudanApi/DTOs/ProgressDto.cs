using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class ProgressDto
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public int Level { get; set; }
        public int TrainerId { get; set; }
        public int TraineeId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class MessageDto
    {
        public int Id { get; set; }
        public int TrainerId { get; set; }
        public int TraineeId { get; set; }
        public DateTime Time { get; set; }
        public string Text { get; set; }
        public string Source { get; set; }
    }
}

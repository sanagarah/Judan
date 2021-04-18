using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class TraineeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string City { get; set; }
        public string Countery { get; set; }
        public string Age { get; set; }
        public string Interest { get; set; }

        public int? TrainerId { get; set; }
    }
}

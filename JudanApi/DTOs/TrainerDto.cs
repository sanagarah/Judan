using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class TrainerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string City { get; set; }
        public string Countery { get; set; }
        public string Age { get; set; }
        public string Field { get; set; }
        public double Rate { get; set; }
        public string Bio { get; set; }
        public string Picture { get; set; }
        public int PostNum { get; set; }
        public int TraineeNum { get; set; }
    }
}

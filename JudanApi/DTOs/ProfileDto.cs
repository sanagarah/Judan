using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class ProfileDto
    {
        public int Id { get; set; }
        public int TrainerId { get; set; }
        public int TraineeNum { get; set; }
        public int PostsNum { get; set; }
    }
}

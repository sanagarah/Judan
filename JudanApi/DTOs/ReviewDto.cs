﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.DTOs
{
    public class ReviewDto
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int TrainerId { get; set; }
        public int TraineeId { get; set; }
    }
}

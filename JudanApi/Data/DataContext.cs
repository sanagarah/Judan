using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JudanApi.Data
{
    public class DataContext: DbContext
    {
        public  DataContext(DbContextOptions options ) : base(options )
        {

        }

        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Trainee> Trainees { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<Progress> Progresses { get; set; }
        public DbSet<TraineeRequest> TraineeRequests { get; set; }
        public DbSet<BankDetails> BanksDetails { get; set; }
        public DbSet<Message> Messages { get; set; }

    }
}

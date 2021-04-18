using JudanApi.Data;
using JudanApi.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace JudanApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JudanController : ControllerBase
    {

        private readonly ILogger<JudanController> _logger;
        private readonly DataContext datacontext;

        public JudanController(ILogger<JudanController> logger, DataContext _dataContext)
        {
            _logger = logger;
            datacontext = _dataContext;
        }


        [HttpPost("TraineePost/")]
        public bool AddTrainee(TraineeDto traineeDto)
        {
            Trainee trainee = new Trainee()
            {
                Name = traineeDto.Name,
                City = traineeDto.City,
                Age = traineeDto.Age,
                Countery = traineeDto.Countery,
                Email = traineeDto.Email,
                Password = traineeDto.Password,
                Interest = traineeDto.Interest
            };

            datacontext.Trainees.Add(trainee);
            return datacontext.SaveChanges() != -1;
        }

        [HttpGet("TraineeGet/")]
        public IEnumerable<TraineeDto> GetTrainee()
        {
            return datacontext.Trainees.Select(x => new TraineeDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Interest = x.Interest,
                TrainerId = x.TrainerId
            }).ToArray();
        }


        //[HttpPost("TraineeRequest/{traineeId}")]
        //public bool AddTraineeRequest(int traineeId, TraineeRequestDto traineeRequestDto)
        //{
        //    TraineeRequest traineeRequest = new TraineeRequest()
        //    {
        //       TraineeId = traineeId,
        //       TrainerId = traineeRequestDto.TrainerId,
        //       Date = traineeRequestDto.Date,
        //       Time = traineeRequestDto.Time,
        //       IsOnline = traineeRequestDto.IsOnline,
        //       Payment = traineeRequestDto.Payment,
        //       Platform = traineeRequestDto.Platform
        //    };

        //    datacontext.TraineeRequests.Add(traineeRequest);
        //    return datacontext.SaveChanges() != -1;
        //}

        [HttpPost("RegisterTrainer/{trainerId}/{traineeId}")]
        public bool RegisterTrainer(int trainerId, int traineeId, TraineeRequestDto traineeRequestDto)
        {
            TraineeRequest traineeRequest = new TraineeRequest()
            {
                TraineeId = traineeId,
                TrainerId = traineeRequestDto.TrainerId,
                Date = traineeRequestDto.Date,
                Time = traineeRequestDto.Time,
                IsOnline = traineeRequestDto.IsOnline,
                Payment = traineeRequestDto.Payment,
                Platform = traineeRequestDto.Platform,
                Type = traineeRequestDto.Type
            };

            var trainee = datacontext.Trainees.Where(x => x.Id == traineeId).FirstOrDefault();

            if (trainee != null)
            {
                trainee.TrainerId = trainerId;
            }
            datacontext.TraineeRequests.Add(traineeRequest);
            return datacontext.SaveChanges() != -1;
        }

        [HttpGet("TraineeForTrainer/{trainerId}")]
        public IEnumerable<TraineeDto> GetTraineeForTrainer(int trainerId)
        {
            var trainees = datacontext.Trainees.Where(x => x.TrainerId == trainerId).ToList();

            List<TraineeDto> traineeDtos = new List<TraineeDto>();
            foreach (var item in trainees)
            {
                traineeDtos.Add(new TraineeDto()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Age = item.Age,
                    City = item.City,
                    Countery = item.Countery,
                    Email = item.Email,
                    Interest = item.Interest,
                });
            }

            return traineeDtos;
        }

        [HttpGet("RegisterGet/{traineeId}/{trainerId}")]
        public IEnumerable<TraineeRequestDto> GetTraineeRequest(int traineeId, int trainerId)
        {
            return datacontext.TraineeRequests.Where(x => x.TraineeId == traineeId && x.TrainerId == trainerId).Select(x => new TraineeRequestDto
            {
                Id = x.Id,
                TrainerId = x.TrainerId,
                Date = x.Date,
                Time = x.Time,
                IsOnline = x.IsOnline,
                Payment = x.Payment,
                Platform = x.Platform,
                Type = x.Type
            }).ToArray();
        }


        [HttpPost("TrainerPost/")]
        public bool AddTrainer(TrainerDto trainerDto)
        {
            Trainer trainer = new Trainer()
            {
                Name = trainerDto.Name,
                City = trainerDto.City,
                Age = trainerDto.Age,
                Countery = trainerDto.Countery,
                Email = trainerDto.Email,
                Password = trainerDto.Password,
                Field = trainerDto.Field,
                Rate = trainerDto.Rate,
                Bio = trainerDto.Bio,
                Picture = trainerDto.Picture,
                TraineeNum = trainerDto.TraineeNum,
                PostNum = trainerDto.PostNum
            };

            datacontext.Trainers.Add(trainer);
            return datacontext.SaveChanges() != -1;
        }

        [HttpGet("TrainerGet/")]
        public IEnumerable<TrainerDto> GetTrainer()
        {
            return datacontext.Trainers.Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Password = x.Password,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }

        [HttpPost("TrainerRateUpdate/{id}")]
        public bool UpdateTrainerRate(int id, TrainerDto trainerDto) {
            Trainer trainerFromDatabase = datacontext.Trainers.FirstOrDefault(x => x.Id == id);
            if (trainerFromDatabase != null)
            {
                trainerFromDatabase.Rate = trainerDto.Rate;
            }
            else
            {
                return false;
            }
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("TrainerUpdate/{id}")]
        public bool UpdateTrainer(int id, TrainerDto trainerDto)
        {
            Trainer trainerFromDatabase = datacontext.Trainers.FirstOrDefault(x => x.Id == id);
            if (trainerFromDatabase != null)
            {
                trainerFromDatabase.Picture = trainerDto.Picture;
                trainerFromDatabase.Name = trainerDto.Name;
                trainerFromDatabase.Field = trainerDto.Field;
                trainerFromDatabase.Bio = trainerDto.Bio;
                trainerFromDatabase.PostNum = trainerDto.PostNum;
            }
            else
            {
                return false;
            }
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("TrainerNumUpdate/{id}")]
        public bool UpdateTrainerNum(int id, TrainerDto trainerDto)
        {
            Trainer trainerFromDatabase = datacontext.Trainers.FirstOrDefault(x => x.Id == id);
            if (trainerFromDatabase != null)
            {
                trainerFromDatabase.TraineeNum = trainerDto.TraineeNum;
            }
            else
            {
                return false;
            }
            return datacontext.SaveChanges() != -1;
        }

        [HttpGet("EmailTrainee/{email}")]
        public IEnumerable<TraineeDto> GetTraineeId(string email)
        {
            return datacontext.Trainees.Where(x => x.Email == email).Select(x => new TraineeDto
            {
                Id = x.Id,
                Password = x.Password
            }).ToArray();
        }

        [HttpGet("EmailTrainer/{email}")]
        public IEnumerable<TrainerDto> GetTrainerId(string email)
        {
            return datacontext.Trainers.Where(x => x.Email == email).Select(x => new TrainerDto
            {
                Id = x.Id,
                Password = x.Password
            }).ToArray();
        }


        [HttpGet("IdTrainee/{id}")]
        public IEnumerable<TraineeDto> GetTraineeInfo(int id)
        {
            return datacontext.Trainees.Where(x => x.Id == id).Select(x => new TraineeDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Interest = x.Interest,
                TrainerId = x.TrainerId
            }).ToArray();
        }

        [HttpGet("IdTrainer/{id}")]
        public IEnumerable<TrainerDto> GetTrainerInfo(int id)
        {
            return datacontext.Trainers.Where(x => x.Id == id).Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }

        [HttpGet("Rate")]
        public IEnumerable<TrainerDto> HighestRate()
        {
            return datacontext.Trainers.OrderByDescending(x => x.Rate).Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }


        [HttpGet("Rate/{rate}")]
        public IEnumerable<TrainerDto> GetRate(int rate)
        {
            return datacontext.Trainers.Where(x => x.Rate >= rate).Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }

        [HttpGet("Match/{city}/{interest}")]
        public IEnumerable<TrainerDto> GetMatch(string city, string interest)
        {
            return datacontext.Trainers.OrderByDescending(x => x.Rate).Where(x => x.City == city && x.Field == interest).Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }

        [HttpGet("Interest/{interest}/{city}")]
        public IEnumerable<TrainerDto> GetByInterest(string interest, string city)
        {
            return datacontext.Trainers.OrderByDescending(x => x.Rate).Where(x => x.Field == interest && x.City != city).Select(x => new TrainerDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                City = x.City,
                Countery = x.Countery,
                Age = x.Age,
                Field = x.Field,
                Rate = x.Rate,
                Bio = x.Bio,
                Picture = x.Picture,
                TraineeNum = x.TraineeNum,
                PostNum = x.PostNum
            }).ToArray();
        }

        [HttpGet("Interests/{trainerid}")]
        public IEnumerable<InterestDto> getInterest(int trainerid)
        {
            return datacontext.Interests.Where(x => x.TrainerId == trainerid).Select(x => new InterestDto
            {
                Id = x.Id,
                Name = x.Name
            }).ToArray();
        }

        [HttpGet("Posts/{trainerid}")]
        public IEnumerable<PostDto> getPosts(int trainerid)
        {
            return datacontext.Posts.Where(x => x.TrainerId == trainerid).Select(x => new PostDto
            {
                Id = x.Id,
                uri = x.uri,
            }).ToArray();

        }

        [HttpGet("Reviews/{trainerid}")]
        public IEnumerable<ReviewDto> getReviews(int trainerid)
        {
            return datacontext.Reviews.Where(x => x.TrainerId == trainerid).Select(x => new ReviewDto
            {
                Id = x.Id,
                Content = x.Content,
                TraineeId = x.TraineeId,
                TrainerId = x.TrainerId
            }).ToArray();

        }

        [HttpGet("Certification/{traineeid}")]
        public IEnumerable<CertificationDto> getCertification(int traineeid)
        {
            return datacontext.Certifications.Where(x => x.TraineeId == traineeid).Select(x => new CertificationDto
            {
                Id = x.Id,
                uri = x.uri,
                TraineeId = x.TraineeId,
                TrainerId = x.TrainerId
            }).ToArray();
        }

        [HttpGet("Progress/{traineeid}")]
        public IEnumerable<ProgressDto> getProgress(int traineeid)
        {
            return datacontext.Progresses.Where(x => x.TraineeId == traineeid).Select(x => new ProgressDto
            {
                Id = x.Id,
                Level = x.Level,
                Subject = x.Subject,
                TraineeId = x.TraineeId,
                TrainerId = x.TrainerId
            }).ToArray();
        }

        [HttpPost("ReviewPost/")]
        public bool AddReview(ReviewDto reviewDto)
        {
            Review review = new Review()
            {
                Content = reviewDto.Content,
                TrainerId = reviewDto.TrainerId,
                TraineeId = reviewDto.TraineeId
            };

            datacontext.Reviews.Add(review);
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("CertificationPost/")]
        public bool AddCertification(CertificationDto certificationDto)
        {
            Certification certification = new Certification()
            {
                uri = certificationDto.uri,
                TrainerId = certificationDto.TrainerId,
                TraineeId = certificationDto.TraineeId
            };

            datacontext.Certifications.Add(certification);
            return datacontext.SaveChanges() != -1;
        }


        [HttpPost("ProgressPost/{traineeId}/{subject}")]
        public bool AddProgress(int traineeId, string subject, ProgressDto progressDto)
        {

            Progress progressFromDatabase = datacontext.Progresses.FirstOrDefault(x => x.TraineeId == traineeId && x.Subject == subject);
            if (progressFromDatabase != null)
            {
                progressFromDatabase.Level = progressDto.Level;
                progressFromDatabase.Subject = progressDto.Subject;
                progressFromDatabase.TrainerId = progressDto.TrainerId;
                progressFromDatabase.TraineeId = progressDto.TraineeId;
            }
   
            else
            {
                Progress progress = new Progress();

                progress.Subject = progressDto.Subject;
                progress.Level = progressDto.Level;
                progress.TrainerId = progressDto.TrainerId;
                progress.TraineeId = progressDto.TraineeId;
                
                datacontext.Progresses.Add(progress);
    
            }
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("PostsPost/{trainerid}")]
        public bool PostsPost(int trainerid, PostDto postDto)
        {
            Post post = new Post()
            {
                uri = postDto.uri,
                TrainerId = trainerid
            };

            datacontext.Posts.Add(post);
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("InterestsPost/{trainerid}")]
        public bool InterestsPost(int trainerid, InterestDto interestDto)
        {
            Interest interest = new Interest()
            {
                Name = interestDto.Name,
                TrainerId = trainerid
            };

            datacontext.Interests.Add(interest);
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("BankDetailsPost/")]
        public bool AddBankDetails(BankDetailsDto bankDetailsDto)
        {
            BankDetails bankDetails = new BankDetails()
            {
                OwnerName = bankDetailsDto.OwnerName,
                BankName = bankDetailsDto.BankName,
                AccountNumber = bankDetailsDto.AccountNumber,
                Date = bankDetailsDto.Date,
                Time = bankDetailsDto.Time,
                Picture = bankDetailsDto.Picture,
                IsConfirmed = bankDetailsDto.IsConfirmed,
            };

            datacontext.BanksDetails.Add(bankDetails);
            return datacontext.SaveChanges() != -1;
        }

        [HttpPost("MessagePost/")]
        public bool AddMessage(MessageDto messageDto)
        {
            Message message = new Message()
            {
                TrainerId = messageDto.TrainerId,
                TraineeId = messageDto.TraineeId,
                Time = messageDto.Time,
                Text = messageDto.Text,
                Source = messageDto.Source
            };

            datacontext.Messages.Add(message);
            return datacontext.SaveChanges() != -1;
        }

        [HttpGet("MessageGetFromTrainer/{trainerId}/{traineeId}")]
        public IEnumerable<MessageDto> GetMessageGetFormTrainer(int trainerId, int traineeId)
        {
            return datacontext.Messages.Where(x => x.TrainerId == trainerId && x.TraineeId == traineeId && x.Source == "Trainer").Select(x => new MessageDto
            {
                Id = x.Id,
                TrainerId = x.TrainerId,
                TraineeId = x.TraineeId,
                Time = x.Time,
                Text = x.Text,
                Source = x.Source
            }).ToArray();
        }


        [HttpGet("MessageGetFromTrainee/{trainerId}/{traineeId}")]
        public IEnumerable<MessageDto> GetMessageGetFormTrainee(int trainerId, int traineeId)
        {
            return datacontext.Messages.Where(x => x.TrainerId == trainerId && x.TraineeId == traineeId && x.Source == "Trainee").Select(x => new MessageDto
            {
                Id = x.Id,
                TrainerId = x.TrainerId,
                TraineeId = x.TraineeId,
                Time = x.Time,
                Text = x.Text,
                Source = x.Source
            }).ToArray();
        }

        [HttpGet("TraineeMessageGet/{traineeId}")]
        public IEnumerable<TrainerDto> GetTrainersByMessage( int traineeId)
        {
            var recipientTrainerIds = datacontext.Messages.Where(x => x.TraineeId == traineeId).Select(x => x.TrainerId).Distinct().ToList();
            
            var trainersToReturn = new List<TrainerDto>();
            foreach (var trainerId in recipientTrainerIds)
            {
                var trainerFromDatabase = datacontext.Trainers.FirstOrDefault(x => x.Id == trainerId);
                if (trainerFromDatabase != null)
                {
                    trainersToReturn.Add(new TrainerDto()
                    {
                        Id = trainerFromDatabase.Id,
                        Name = trainerFromDatabase.Name,
                        Field = trainerFromDatabase.Field,
                        Picture = trainerFromDatabase.Picture
                    });
                }
            }

            return trainersToReturn;
        }

        [HttpGet("TrainerMessageGet/{trainerId}")]
        public IEnumerable<TraineeDto> GetTraineesByMessage(int trainerId)
        {
            var recipientTraineeIds = datacontext.Messages.Where(x => x.TrainerId == trainerId).Select(x => x.TraineeId).Distinct().ToList();

            var traineesToReturn = new List<TraineeDto>();
            foreach (var traineeId in recipientTraineeIds)
            {
                var traineeFromDatabase = datacontext.Trainees.FirstOrDefault(x => x.Id == traineeId);
                if (traineeFromDatabase != null)
                {
                    traineesToReturn.Add(new TraineeDto()
                    {
                        Id = traineeFromDatabase.Id,
                        Name = traineeFromDatabase.Name,
                        Interest = traineeFromDatabase.Interest,
                    });
                }
            }

            return traineesToReturn;
        }
    }
}

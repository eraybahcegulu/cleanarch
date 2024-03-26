using api.Application.Repositories;
using api.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence.Repositories
{
    public class FileReadRepository : ReadRepository<api.Domain.Entities.File>, IFileReadRepository
    {
        public FileReadRepository(apiDbContext context) : base(context)
        {
        }
    }
}

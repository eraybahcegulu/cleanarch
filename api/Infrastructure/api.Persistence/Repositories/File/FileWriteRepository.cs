using api.Application.Repositories;
using api.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence.Repositories
{
    public class FileWriteRepository : WriteRepository<api.Domain.Entities.File>, IFileWriteRepository
    {
        public FileWriteRepository(apiDbContext context) : base(context)
        {
        }
    }
}

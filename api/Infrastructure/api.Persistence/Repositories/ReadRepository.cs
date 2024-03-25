using api.Application.Repositories;
using api.Domain.Entities.Common;
using api.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity // BaseEntity referansı ile id ile sorgulamalar
    {
        private readonly apiDbContext _context; // ioc container dan alındı

        public ReadRepository(apiDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public IQueryable<T> GetAll()
            => Table;

        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method)
            => Table.Where(method);

        public async Task<T> GetSignleAsync(Expression<Func<T, bool>> method)
            => await Table.FirstOrDefaultAsync(method);

        public async Task<T> GetByIdAsync(string id)
            => await Table.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));

    }
}

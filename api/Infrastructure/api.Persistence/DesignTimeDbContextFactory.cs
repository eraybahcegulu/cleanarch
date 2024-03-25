using api.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<apiDbContext>
    {
        public apiDbContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<apiDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(Configuration.ConnectionString);
            return new (dbContextOptionsBuilder.Options);
        }
    }
}

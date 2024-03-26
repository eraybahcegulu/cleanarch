using api.Domain.Entities;
using api.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence.Contexts
{
    public class apiDbContext : DbContext
    {
        public apiDbContext(DbContextOptions options) : base(options)
        {}

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            //ChangeTracker: Entity üzerinde değişikliklerin veya eklenenlerin yakalanmasını sağlar. Track edilen verileri yakalayıp elde eder.

            //herhangi bir save işleminde override ile save sürecinde araya girip added veya modified durumuna göre ortak entity createddate ve updateddate değerlerine işlem
            var datas = ChangeTracker
                .Entries<BaseEntity>();

            foreach(var data in datas)
            {
                _ = data.State switch
                {
                    EntityState.Added => data.Entity.CreatedDate = DateTime.UtcNow,
                    EntityState.Modified => data.Entity.UpdatedDate = DateTime.UtcNow,
                    _ => DateTime.UtcNow
                };
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}

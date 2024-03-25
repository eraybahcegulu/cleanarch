using api.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Application.Repositories
{
    public interface IRepository<T> where T : BaseEntity // T class olmalı
    {
        DbSet<T> Table { get; }
    }
}

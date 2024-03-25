﻿using api.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace api.Application.Repositories
{
    public interface IReadRepository<T> : IRepository<T> where T : BaseEntity // T class olmalı
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetWhere(Expression<Func<T, bool>> method); // bool şart doğru ise getir
        Task<T> GetSignleAsync(Expression<Func<T, bool>> method);
        Task<T> GetByIdAsync(string id);
    }
}

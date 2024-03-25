﻿using api.Application.Repositories;
using api.Domain.Entities;
using api.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence.Repositories
{
    public class OrderWriteRepository : WriteRepository<Order>, IOrderWriteRepository
    {
        public OrderWriteRepository(apiDbContext context) : base(context)
        {
        }
    }
}

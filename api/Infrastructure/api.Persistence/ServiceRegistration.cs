using api.Application.Abstractions;
using api.Persistence.Concretes;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services)
        {
            services.AddSingleton<IProductService, ProductService>();

        }
    }
}

/* 
 * IProductService çağırıldığında ProductService i getir
 * WEBAPI ioc container a ekliyoruz. IServiceCollection ioc container
 */
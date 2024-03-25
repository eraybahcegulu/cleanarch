using api.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;

        public ProductController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]
        public async void Get()
        {
            await _productWriteRepository.AddRangeAsync(new()
            {
                new() 
                { 
                    Id = Guid.NewGuid(),
                    Name = "Product 1",
                    Stock = 100,
                    CreatedDate= DateTime.UtcNow,
                    Price = 1000
                },

                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Product 2",
                    Stock = 200,
                    CreatedDate= DateTime.UtcNow,
                    Price = 2000
                },

                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Product 3",
                    Stock = 300,
                    CreatedDate= DateTime.UtcNow,
                    Price = 3000
                }
            });
            await _productWriteRepository.SaveAsync();
        }
    }
}

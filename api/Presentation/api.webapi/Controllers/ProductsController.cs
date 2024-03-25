using api.Application.Repositories;
using api.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]
        public async Task Get()
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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }
    }
}

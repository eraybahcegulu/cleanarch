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

        readonly private IOrderWriteRepository _orderWriteRepository;
        readonly private IOrderReadRepository _orderReadRepository;

        readonly private ICustomerWriteRepository _customerWriteRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository, IOrderWriteRepository orderWriteRepository, ICustomerWriteRepository customerWriteRepository, IOrderReadRepository orderReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            _orderWriteRepository = orderWriteRepository;
            _customerWriteRepository = customerWriteRepository;
            _orderReadRepository = orderReadRepository;
        }


        [HttpGet]
      public async Task Get()
      {
           Order order = await _orderReadRepository.GetByIdAsync("512debe6-7f8d-4f94-8207-1b7b63252777");
           order.Address = "Kütahya, Tavşanlı";
           await _orderWriteRepository.SaveAsync();
      }



/*
  [HttpGet]
  public async Task Get()
  {
      var customerId = Guid.NewGuid();
      await _customerWriteRepository.AddAsync(new() { Id = customerId, Name ="Eray"});
      await _orderWriteRepository.AddAsync(new() { Description = "bla bla", Address = "Ankara, Çankaya", CustomerId= customerId });
      await _orderWriteRepository.AddAsync(new() { Description = "bla bla 2", Address = "Kütahya, Merkez", CustomerId = customerId });
      await _orderWriteRepository.SaveAsync();
  }
  /*

  /*
  [HttpGet]
  public async Task Get()
  {
      await _productWriteRepository.AddAsync(
          new() { Name = "C Product", Price = 1.500F, Stock = 10, CreatedDate=DateTime.UtcNow }
          );
      await _productWriteRepository.SaveAsync();
  }
  /*


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
  */

        /*
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }
        */
    }
}

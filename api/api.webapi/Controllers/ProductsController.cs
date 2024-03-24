using api.Application.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService; //IProductService talebi

        public ProductsController(IProductService productService) //enjekte
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts(); //kullanım
            return Ok(products);
        }
    }
}

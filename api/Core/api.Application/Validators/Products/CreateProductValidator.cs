using api.Application.Features.Commands.Product.CreateProduct;
using FluentValidation;

namespace api.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<CreateProductCommandRequest>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Product name required")
                .MaximumLength(150)
                .MinimumLength(5)
                    .WithMessage("Product name must between 5-50 characters");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Product stock required")
                .Must(s => s >= 0)
                    .WithMessage("Stock must be 0 or greater");

            RuleFor(p => p.Price)
                 .NotEmpty()
                 .NotNull()
                     .WithMessage("Product price required")
                 .Must(s => s >= 0)
                     .WithMessage("Price must be 0 or greater");
        }
    }
}

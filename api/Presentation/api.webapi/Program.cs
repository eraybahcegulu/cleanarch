using api.Application.Validators.Products;
using api.Infrastructure;
using api.Infrastructure.Filters;
using api.Infrastructure.Services.Storage.Azure;
using api.Infrastructure.Services.Storage.Local;
using api.Persistence;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddInfrastructureServices();
builder.Services.AddPersistenceServices();

builder.Services.AddStorage<LocalStorage>();
//builder.Services.AddStorage <AzureStorage>();

builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
    policy.WithOrigins("http://localhost:3000", "https://localhost:3000").AllowAnyHeader().AllowAnyMethod()
));

builder.Services.AddControllers(options => options.Filters.Add<ValidationFilter>())
     .AddFluentValidation(configuration => configuration.RegisterValidatorsFromAssemblyContaining<CreateProductValidator>()) //mimari ile tek bir tanýmlama(CreateProductValidator) ile tüm validatorlar iþlenir
     .ConfigureApiBehaviorOptions(options => options.SuppressModelStateInvalidFilter= true); // default filter bastýrýlýyor custom filter tasarlamak için

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

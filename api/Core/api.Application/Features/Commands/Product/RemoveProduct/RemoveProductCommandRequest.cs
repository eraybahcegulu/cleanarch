﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Application.Features.Commands.Product.DeleteProduct
{
    public class RemoveProductCommandRequest : IRequest<RemoveProductCommandResponse>
    {
        public string Id { get; set; }
    }
}

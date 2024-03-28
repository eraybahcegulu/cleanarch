using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Application.Exceptions
{
    public class NotFoundUserException : Exception
    {
        public NotFoundUserException() : base("Username-Email or password not valid")
        {

        }
        public NotFoundUserException(string message) : base(message)
        {

        }

        public NotFoundUserException(string? message, Exception? innterException) : base(message, innterException)
        {

        }
    }
}

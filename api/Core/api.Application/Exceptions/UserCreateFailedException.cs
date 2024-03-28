using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Application.Exceptions
{
    public class UserCreateFailedException : Exception
    {
        public UserCreateFailedException() : base("User registration failed")
        {
            
        }
        public UserCreateFailedException(string message) : base(message)
        {

        }

        public UserCreateFailedException(string? message, Exception? innterException) : base(message, innterException)
        {

        }
    }
}

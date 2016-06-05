using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ChutzpahSample.Startup))]
namespace ChutzpahSample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

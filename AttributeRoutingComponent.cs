using System.Web.Http;
using Umbraco.Core.Composing;

namespace FreakyFashion2
{
    public class AttributeRoutingComponent : IComponent
    {
        public void Initialize()
        {
            GlobalConfiguration.Configuration.MapHttpAttributeRoutes();

        }

        public void Terminate()
        {

        }
    }

}
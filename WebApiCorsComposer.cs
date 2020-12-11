using System.Web.Http;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace FreakyFashion2
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    class WebApiCorsComposer : IComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Insert<WebApiCorsComponent>();
        }

        public class WebApiCorsComponent : IComponent
        {
            public void Initialize()
            {
                GlobalConfiguration.Configuration.EnableCors();
            }

            public void Terminate()
            {
            }
        }
    }
}
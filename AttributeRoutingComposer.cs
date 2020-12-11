using Umbraco.Core;
using Umbraco.Core.Composing;

namespace FreakyFashion2
{
    public class AttributeRoutingComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components()
                .Append<AttributeRoutingComponent>();
        }
    }
}
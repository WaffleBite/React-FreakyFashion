using FreakyFashion2.Models.ContentTypes;
using FreakyFashion2.Models.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors;
using System.Web.Http.Results;
using System.Web.Mvc;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.Web.WebApi;

namespace FreakyFashion2.API
{

    //Umbraco/Api/Products/GetProducts
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductsController : UmbracoApiController
    {
        [HttpGet]
        public JsonResult<IEnumerable<ProductDto>> GetProducts()
        {
            var home = Umbraco.ContentAtRoot().First();

            var products = home.Descendant<Products>();

            var productDtos = products.Children.Select(x => new ProductDto
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Value<string>("productDescription"),
                Price = x.Value<decimal>("productPrice"),
                ArtNumber = x.Value<string>("artNumber"),
                ImageUrl = GetImageUrl(x.Value<IPublishedContent>("productImageUrl"))
            });

            return Json(productDtos);
        }

        private string GetImageUrl(IPublishedContent publishedContent)
        {
            var image = Umbraco.Media(publishedContent.Id);

            return image.MediaUrl(mode: UrlMode.Absolute);
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public JsonResult<ProductDto> GetProductsById(int id)
        {
            var home = Umbraco.ContentAtRoot().First();

            var products = home.Descendant<Products>();

            var product = products.Children.FirstOrDefault(x => x.Id == id);
            var productToReturn = new ProductDto()
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Value<string>("productDescription"),
                Price = product.Value<decimal>("productPrice"),
                ArtNumber = product.Value<string>("artNumber"),
                ImageUrl = GetImageUrl(product.Value<IPublishedContent>("productImageUrl"))
            };

            return Json(productToReturn);
        }

    }
}
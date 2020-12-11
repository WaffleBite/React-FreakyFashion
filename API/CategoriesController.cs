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

    //Umbraco/Api/Categories/GetCategories
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoriesController : UmbracoApiController
    {
        [HttpGet]
        public JsonResult<IEnumerable<CategoryDto>> GetCategories()
        {
            var home = Umbraco.ContentAtRoot().First();

            var categories = home.Descendant<Categories>();

            var categoryDtos = categories.Children.Select(x => new CategoryDto
            {
                Id = x.Id,
                Name = x.Name,              
                ImageUrl = GetImageUrl(x.Value<IPublishedContent>("categoryImage"))
            });

            return Json(categoryDtos);
        }

        private string GetImageUrl(IPublishedContent publishedContent)
        {
            var image = Umbraco.Media(publishedContent.Id);

            return image.MediaUrl(mode: UrlMode.Absolute);
        }
    }
}
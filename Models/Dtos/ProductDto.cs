using Newtonsoft.Json;

namespace FreakyFashion2.Models.Dtos
{
    public class ProductDto
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("artNumber")]
        public string ArtNumber { get; set; }
        [JsonProperty("price")]
        public decimal Price { get; set; }
        [JsonProperty("imageUrl")]
        public string ImageUrl { get; set; }
    }
}
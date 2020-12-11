using Newtonsoft.Json;

namespace FreakyFashion2.Models.Dtos
{
    public class CategoryDto
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("imageUrl")]
        public string ImageUrl { get; set; }
    }
}
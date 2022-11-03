using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;
using System.Drawing;

namespace Pokedex.Models
{
    [Table("Images")]
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "ID:")]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo Pokemon é obrigatório")]
        [Display(Name = "Pokemon")]
        public Pokemon Pokemon { get; set; }

        [Required(ErrorMessage = "Campo Url é obrigatório")]
        [Display(Name = "Url")]
        public string Url { get; set; }

        public ICollection<Pokemon> pokemons { get; set; }
    }
}

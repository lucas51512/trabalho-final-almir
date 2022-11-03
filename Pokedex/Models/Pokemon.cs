using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pokedex.Models
{
    [Table("Pokemons")]
    public class Pokemon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "ID:")]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatrório")]
        [Display(Name = "Nome")]
        public string Name { get; set; }

        [Required(ErrorMessage = "O campo Altura é obrigatrório")]
        [Display(Name = "Altura")]
        public float Heigth { get; set; }

        [Required(ErrorMessage = "O campo Imagem é obrigatrório")]
        [Display(Name = "Imagem")]
        public Image Image { get; set; }

        [Required(ErrorMessage = "O campo Abilidades é obrigatrório")]
        [Display(Name = "Abilidades")]
        public Abillitie Abillitie { get; set; }

        public ICollection<Abillitie> Abillities { get; set; }
    }
}

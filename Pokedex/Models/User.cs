using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace Pokedex.Models
{
    [Table("User")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "ID:")]
        public int Id { get; set; }

        [StringLength(30)]
        [Required(ErrorMessage = "O campo Nome Usuario é obrigatório")]
        [Display(Name = "Nome Usuario")]
        public string NameUser { get; set; }

        [Required(ErrorMessage = "O campo Email Usuario é obrigatório")]
        [Display(Name = "Email Usuario")]
        public string EmailUser { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório")]
        [Display(Name = "Senha")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "O campo Pokemon é obrigatório")]
        [Display(Name = "Pokemon")]
        public Pokemon Pokemon { get; set; }

        [Required(ErrorMessage = "O campo Suprimento é obrigatório")]
        [Display(Name = "Suprimento")]
        public Supplie Supplie { get; set; }

        public ICollection<Supplie> Supplies { get; set; }
        public ICollection<Pokemon> pokemons { get; set; }
    }
}

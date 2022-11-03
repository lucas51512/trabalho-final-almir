using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pokedex.Models
{
    [Table("Abillities")]
    public class Abillitie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "ID:")]
        public int Id { get; set; }

        [StringLength(35)]
        [Required(ErrorMessage = "Campo Nome é obrigatorio")]
        [Display(Name = "Nome:")]
        public string Name { get; set; }

        [StringLength(50)]
        [Required(ErrorMessage = "Campo Efeito é obrigatorio")]
        [Display(Name = "Efeito:")]
        public string Effect { get; set; }
    }
}

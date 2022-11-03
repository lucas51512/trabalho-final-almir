using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pokedex.Models
{
    [Table("Supplies")]
    public class Supplie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "ID")]
        public int Id { get; set; }

        [StringLength(40)]
        [Required(ErrorMessage = "O campo Nome Suprimento é obrigatório")]
        [Display(Name = "Nome Suprimento")]
        public string NameSupplie { get; set; }

        [StringLength(40)]
        [Required(ErrorMessage = "O campo Descrição Suprimento é obrigatório")]
        [Display(Name = "Descrição Suprimento")]
        public string DescriptionSupplie { get; set; }

        [DisplayFormat(DataFormatString = "{0: C2}")]
        [Required(ErrorMessage = "O campo Preço Suprimento é obrigatório")]
        [Display(Name = "Preço Suprimento")]
        public float PriceSupplie { get; set; }

        public ICollection<User> Users { get; set; }
    }
}

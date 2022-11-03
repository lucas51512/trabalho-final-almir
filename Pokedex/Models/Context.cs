using Microsoft.EntityFrameworkCore;

namespace Pokedex.Models
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        DbSet<Abillitie> Abillities { get; set; }
        DbSet<Image> Images { get; set; }
        DbSet<Pokemon> Pokemons { get; set; }
        DbSet<Supplie> Supplies { get; set; }
        DbSet<User> Users { get; set; }
    }
}

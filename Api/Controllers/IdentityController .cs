using API.Models;
using API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("identity")]
    [Authorize]
    public class IdentityController : ControllerBase
    {
        private readonly IRepository _repo;
        public IdentityController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }

        [HttpGet("users")]
        public async Task<IActionResult> getAllUsers()
        {
            try
            {
                var result = await _repo.getAllUsers();
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest($"Erro: {e.Message}");
            }
        }

        [HttpGet("user/{id}")]
        public async Task<IActionResult> getUserId(int id)
        {
            try
            {
                var result = await _repo.getUserAsyncById(id);
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest($"Erro: {e.Message}");
            }
        }

        [HttpPut("user/{id}")]
        public async Task<IActionResult> putUser(User modelUser, int id)
        {
            try
            {
                var user = await _repo.getUserAsyncById(id);
                _repo.Update(modelUser);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(); 
                }
                return BadRequest("Erro inesperado");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

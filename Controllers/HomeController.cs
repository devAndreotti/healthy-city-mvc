using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Hotsite.Models;

namespace Hotsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastrar(Interesse cad)
        {
            try
            {
                DatabaseService dbs = new DatabaseService();
                dbs.CadastraInteresse(cad);
                return Json(new{status="OK"});
            }
            catch(Exception e)
            {
                _logger.LogError("REGISTRO DE ERROS CADASTRO" + e.Message);
                return Json(new{status="ERR", mensagem="Erro no cadastro"});
            }

            //return View("Index",cad);
        }

        public IActionResult Privacy()
        {
            return View();
        }

    }
}
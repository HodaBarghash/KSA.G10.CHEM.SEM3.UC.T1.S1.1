function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mlX0ovVOIF":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyIAHCFtEXc2-v6SdzgbMRqArKTuuQIus5TQQ3ZOjL3i1ulYDES18rSFsJyT-vIHcw2/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


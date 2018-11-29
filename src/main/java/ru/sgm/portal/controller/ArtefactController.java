package ru.sgm.portal.controller;

import org.springframework.web.bind.annotation.*;
import ru.sgm.portal.Model.Artefact;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/rest", method = RequestMethod.GET)
public class ArtefactController {
    @ResponseBody
    @GetMapping("/artefacts")
    public List<Artefact> listArtefacts() {
        List<Artefact> artefactList = new ArrayList<Artefact>() {{
            add( new Artefact( "Artefact1", "Description1", 1900, 1, 1, 1, "www.wikipedia.org" ) );
        }};
        return artefactList;
    }
}

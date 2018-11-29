package ru.sgm.portal.controller;

import org.springframework.web.bind.annotation.*;
import ru.sgm.portal.Model.BaseLayer;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/rest", method = RequestMethod.GET)
public class BaseLayerController {
    @ResponseBody
    @GetMapping("/basemap")
    public List<BaseLayer> listBaseLayers(/*int beginDT, int endDT*/) {
        List<BaseLayer> baseLayerList = new ArrayList<BaseLayer>() {{
            add(new BaseLayer("Map1a PALEOMAP PaleoAtlas_000.jpg", "baselayer"));
            add(new BaseLayer("Map2a Last Glacial Maximum_001.jpg", "baselayer"));
            add(new BaseLayer("Map3a Pliocene_004.jpg", "baselayer"));
            add(new BaseLayer("Map4a Messinian Event_006.jpg", "baselayer"));
            add(new BaseLayer("Map5a Late Miocene_010.jpg", "baselayer"));
            add(new BaseLayer("Map6a  Middle Miocene_015.jpg", "baselayer"));
            add(new BaseLayer("Map7a  Early Miocene_020.jpg", "baselayer"));
            add(new BaseLayer("Map8a Late Oligocene_025.jpg", "baselayer"));
            add(new BaseLayer("Map9a  Early Oligocene_030.jpg", "baselayer"));
            add(new BaseLayer("Map10a Late Eocene_035.jpg", "baselayer"));
            add(new BaseLayer("Map11a MIddle Eocene_040.jpg", "baselayer"));
            add(new BaseLayer("Map12a early Middle Eocene_045.jpg", "baselayer"));
            add(new BaseLayer("Map13a Early Eocene_050.jpg", "baselayer"));
            add(new BaseLayer("Map14a PETM_055.jpg", "baselayer"));
            add(new BaseLayer("Map15a Paleocene_060.jpg", "baselayer"));
            add(new BaseLayer("Map16a KT Boundary_066.jpg", "baselayer"));
            add(new BaseLayer("Map17a LtK Maastrichtian_070.jpg", "baselayer"));
            add(new BaseLayer("Map18a LtK Late Campanian_075.jpg", "baselayer"));
            add(new BaseLayer("Map19a LtK Early Campanian_080.jpg", "baselayer"));
            add(new BaseLayer("Map21a LtK Turonian_090.jpg", "baselayer"));
            add(new BaseLayer("Map22a LtK Cenomanian_095.jpg", "baselayer"));
            add(new BaseLayer("Map23a EK Late Albian_100.jpg", "baselayer"));
            add(new BaseLayer("Map24a EK Middle Albian_105.jpg", "baselayer"));
            add(new BaseLayer("Map25a EK Early Albian_110.jpg", "baselayer"));
            add(new BaseLayer("Map26a EK Late Aptian_115.jpg", "baselayer"));
            add(new BaseLayer("Map27a EK Early Albian_120.jpg", "baselayer"));
            add(new BaseLayer("Map28a EK Barremian_125.jpg", "baselayer"));
            add(new BaseLayer("Map29a EK Hauterivian_130.jpg", "baselayer"));
            add(new BaseLayer("Map30a EK Valangian_135.jpg", "baselayer"));
            add(new BaseLayer("Map31a EK Berriasian_140.jpg", "baselayer"));
            add(new BaseLayer("Map32a Jurassic-Cretaceous Boundary_145.jpg", "baselayer"));
            add(new BaseLayer("Map33a LtJ Tithonian_150.jpg", "baselayer"));
            add(new BaseLayer("Map34a LtJ Kimmeridgian_155.jpg", "baselayer"));
            add(new BaseLayer("Map35a LtJ Oxfordian_160.jpg", "baselayer"));
            add(new BaseLayer("Map36a MJ Callovian_165.jpg", "baselayer"));
            add(new BaseLayer("Map37a MJ Bajocian&Bathonian_170.jpg", "baselayer"));
            add(new BaseLayer("Map38a MJ Aalenian_175.jpg", "baselayer"));
            add(new BaseLayer("Map39a EJ Toarcian_180.jpg", "baselayer"));
            add(new BaseLayer("Map40a EJ Pliensbachian_185.jpg", "baselayer"));
            add(new BaseLayer("Map41a EJ Sinemurian_190.jpg", "baselayer"));
            add(new BaseLayer("Map42a EJ Hettangian_195.jpg", "baselayer"));
            add(new BaseLayer("Map43a Triassic-Jurassic Boundary_200.jpg", "baselayer"));
            add(new BaseLayer("Map44a LtTr Norian_210.jpg", "baselayer"));
            add(new BaseLayer("Map45a LtTr Carnian_220.jpg", "baselayer"));
            add(new BaseLayer("Map46a MTr Ladinian_230.jpg", "baselayer"));
            add(new BaseLayer("Map47a MTr Anisian_240.jpg", "baselayer"));
            add(new BaseLayer("Map48a ETr Induan-Olenekian_245.jpg", "baselayer"));
            add(new BaseLayer("Map49a Permo-Triassic Boundary_250.jpg", "baselayer"));
            add(new BaseLayer("Map50a LtP Lopingian_255.jpg", "baselayer"));
            add(new BaseLayer("Map51a LtP Capitanian_260.jpg", "baselayer"));
            add(new BaseLayer("Map52a MP Roadian&Wordian_270.jpg", "baselayer"));
            add(new BaseLayer("Map53a EP Kungurian_275.jpg", "baselayer"));
        }};
        return baseLayerList;
    }
}

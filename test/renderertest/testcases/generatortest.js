function AddGeneratorTests (canvasTester, viewer)
{
	var generatorSuite = canvasTester.AddTestSuite ('Generator');
	
	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateCuboid (1, 1, 1);
		var body2 = JSM.GenerateCuboid (1.2, 1.4, 1.6);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cube.png');

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateSphere (0.5, 20, true);
		var body2 = JSM.GenerateSphere (0.6, 6, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/sphere.png');	
	
	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateTriangulatedSphere (0.5, 3, true);
		var body2 = JSM.GenerateTriangulatedSphere (0.6, 2, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/triangulated_sphere.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateCylinder (0.5, 1.0, 20, true, true);
		var body2 = JSM.GenerateCylinder (0.6, 1.2, 15, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cylinder.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GeneratePie (0.5, 0.2, 250.0 * JSM.DegRad, 20, true, true);
		var body2 = JSM.GeneratePie (0.6, 0.4, 220.0 * JSM.DegRad, 15, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/pie.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateCone (0.2, 0.5, 1.0, 20, true, true);
		var body2 = JSM.GenerateCone (0.6, 0.3, 1.2, 15, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cone.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateCone (0.0, 0.5, 1.0, 20, true, true);
		var body2 = JSM.GenerateCone (0.6, 0.0, 1.2, 15, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cone2.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var basePolygon = [
			new JSM.Coord (-0.5, -0.5, 0.0),
			new JSM.Coord (0.5, -0.5, 0.0),
			new JSM.Coord (0.5, 0.5, 0.0),
			new JSM.Coord (0.0, 0.5, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.5, 0.0, 0.0)
		];
		var direction = new JSM.Coord (0.0, 0.0, 1.0);
		
		var body1 = JSM.GeneratePrism (basePolygon, direction, 1.0, true, null);
		var body2 = JSM.GeneratePrism (basePolygon, direction, 1.2, false, null);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/prism.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var circle = JSM.GenerateCirclePoints (1, 20, new JSM.Coord (0, 0, 0));
		circle[0].Set (0, 0, 0);
		circle[10].Set (-2, 0, 0);
		
		var direction = new JSM.Vector (0.0, 0.0, 1.0);
		var body = JSM.GeneratePrism (circle, direction, 1.0, true, 160 * JSM.DegRad);

		model.AddBody (body);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/curved_prism.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

			var basePoints = [
				new JSM.Coord (0, 0, 0),
				new JSM.Coord (7, 0, 0),
				new JSM.Coord (7, 3, 0),
				new JSM.Coord (0, 3, 0),
				null,
				new JSM.Coord (1, 1, 0),
				new JSM.Coord (1, 2, 0),
				new JSM.Coord (2, 2, 0),
				null,
				new JSM.Coord (3, 1, 0),
				new JSM.Coord (3, 2, 0),
				new JSM.Coord (4, 2, 0),
				new JSM.Coord (4, 1, 0),
				null,
				new JSM.Coord (5, 1, 0),
				new JSM.Coord (5, 2, 0),
				new JSM.Coord (6, 2, 0),
				new JSM.Coord (6, 1, 0),
				new JSM.Coord (5.5, 1.5, 0)
			];

		var basePoints = [
			new JSM.Coord (0, 0, 0),
			new JSM.Coord (3.5, 0, 0),
			new JSM.Coord (3.5, 1.5, 0),
			new JSM.Coord (0, 1.5, 0),
			null,
			new JSM.Coord (0.5, 0.5, 0),
			new JSM.Coord (0.5, 1, 0),
			new JSM.Coord (1, 1, 0),
			null,
			new JSM.Coord (1.5, 0.5, 0),
			new JSM.Coord (1.5, 1, 0),
			new JSM.Coord (2, 1, 0),
			new JSM.Coord (2, 0.5, 0),
			null,
			new JSM.Coord (2.5, 0.5, 0),
			new JSM.Coord (2.5, 1, 0),
			new JSM.Coord (3, 1, 0),
			new JSM.Coord (3, 0.5, 0),
			new JSM.Coord (2.75, 0.75, 0)
		];
		
		var direction = new JSM.Vector (0.0, 0.0, 1.0);
		var body1 = JSM.GeneratePrismWithHole (basePoints, direction, 0.3, true);
		body1.OffsetToOrigo ();
		
		model.AddBody (body1);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/prism_with_hole.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var basePolygon = [
			new JSM.Coord (-0.5, -0.5, 0.0),
			new JSM.Coord (0.5, -0.5, 0.0),
			new JSM.Coord (0.5, 0.5, 0.0),
			new JSM.Coord (0.0, 0.5, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.5, 0.0, 0.0)
		];
		var direction = new JSM.Coord (0.0, 0.0, 1.0);
		
		var body1 = JSM.GeneratePrismShell (basePolygon, direction, 1.0, 0.1, true);
		var body2 = JSM.GeneratePrismShell (basePolygon, direction, 1.2, 0.2, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/prism_shell.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateCylinderShell (0.5, 1.0, 0.1, 20, true, true);
		var body2 = JSM.GenerateCylinderShell (0.6, 1.2, 0.2, 15, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cylinder_shell.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var basePolygon = [
			new JSM.Coord (-0.5, -0.5, 0.0),
			new JSM.Coord (0.5, -0.5, 0.0),
			new JSM.Coord (0.5, 0.5, 0.0),
			new JSM.Coord (0.0, 0.5, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.5, 0.0, 0.0)
		];
		var direction = new JSM.Coord (0.0, 0.0, 1.0);
		
		var body1 = JSM.GenerateLineShell (basePolygon, direction, 1.0, 0.1, true, true);
		var body2 = JSM.GenerateLineShell (basePolygon, direction, 1.2, 0.2, false, false);
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/line_shell.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateTorus (0.3, 0.2, 25, 25, true);
		var body2 = JSM.GenerateTorus (0.4, 0.3, 15, 15, false);
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/torus.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var basePolygon = [
			new JSM.Coord (-0.2, -0.2, 0.0),
			new JSM.Coord (0.2, -0.2, 0.0),
			new JSM.Coord (0.2, 0.1, 0.0),
			new JSM.Coord (0.0, 0.1, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.2, 0.0, 0.0)
		];
		
		var body1 = JSM.GeneratePolyTorus (basePolygon, 0.3, 25, true);
		var body2 = JSM.GeneratePolyTorus (basePolygon, 0.4, 15, false);
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/poly_torus.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var basePolygon = [
			new JSM.Coord (-0.2, -0.2, 0.0),
			new JSM.Coord (0.2, -0.2, 0.0),
			new JSM.Coord (0.2, 0.1, 0.0),
			new JSM.Coord (0.0, 0.1, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.2, 0.0, 0.0)
		];
		
		var aSector = new JSM.Sector (new JSM.Coord (0.5, 0.0, 0.0), new JSM.Coord (-0.5, 0.0, 0.0));
		var bSector = new JSM.Sector (new JSM.Coord (0.0, 1.0, 0.5), new JSM.Coord (0.0, 1.0, -0.5));
		var body1 = JSM.GenerateRuledFromSectors (aSector, bSector, 25, 25, true);
		var body2 = JSM.GenerateRuledFromSectors (aSector, bSector, 15, 15, false);
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/ruled.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var polyLine = [
			new JSM.Coord (-0.5, 0.0, -0.5),
			new JSM.Coord (-0.1, 0.0, 0.0),
			new JSM.Coord (-0.3, 0.0, 0.5)
		];
		
		var axis = new JSM.Sector (new JSM.Coord (0.0, 0.0, 0.0), new JSM.Coord (0.0, 0.0, 1.0));
		var body1 = JSM.GenerateRevolved (polyLine, axis, 200 * JSM.DegRad, 25, true, 'CurveSegments');
		var body2 = JSM.GenerateRevolved (polyLine, axis, 250 * JSM.DegRad, 15, false, 'None');
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/revolved.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var polyLine = [
			new JSM.Coord (-0.5, 0.0, -0.5),
			new JSM.Coord (-0.1, 0.0, 0.0),
			new JSM.Coord (-0.3, 0.0, 0.5)
		];
		
		var axis = new JSM.Sector (new JSM.Coord (0.0, 0.0, 0.0), new JSM.Coord (0.0, 0.0, 1.0));
		var body1 = JSM.GenerateRevolved (polyLine, axis, 360 * JSM.DegRad, 25, true, 'CurveSegments');
		var body2 = JSM.GenerateRevolved (polyLine, axis, 360 * JSM.DegRad, 15, false, 'None');
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/revolved2.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		function TheFunction1 (x, y) {
			return x * x - y * y;
		}
	
		function TheFunction2 (x, y) {
			return x * x * x - y * y * y;
		}

		var model = new JSM.Model ();

		var intervalMin = new JSM.Coord2D (-0.5, -0.5);
		var intervalMax = new JSM.Coord2D (0.5, 0.5);

		var body1 = JSM.GenerateFunctionSurface (TheFunction1, intervalMin, intervalMax, 25, true);	
		var body2 = JSM.GenerateFunctionSurface (TheFunction2, intervalMin, intervalMax, 15, false);
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/function_surface.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		function TheFunction1 (x, y) {
			return x * x - y * y;
		}
	
		function TheFunction2 (x, y) {
			return x * x * x - y * y * y;
		}

		var model = new JSM.Model ();

		var intervalMin = new JSM.Coord2D (-0.5, -0.5);
		var intervalMax = new JSM.Coord2D (0.5, 0.5);

		var body1 = JSM.GenerateFunctionSurfaceSolid (TheFunction1, intervalMin, intervalMax, 25, true, 1.0);
		var body2 = JSM.GenerateFunctionSurfaceSolid (TheFunction2, intervalMin, intervalMax, 15, false, 1.5);
		OffsetTwoBodies (body1, body2, 0.7, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/function_surface_solid.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
		
		var names = [
			'Tetrahedron',
			'Hexahedron',
			'Octahedron',
			'Dodecahedron',
			'Icosahedron',
			'TruncatedTetrahedron',
			'Cuboctahedron',
			'TruncatedCube',
			'TruncatedOctahedron',
			'Rhombicuboctahedron',
			'TruncatedCuboctahedron',
			'SnubCube',
			'Icosidodecahedron',
			'TruncatedDodecahedron',
			'TruncatedIcosahedron',
			'Rhombicosidodecahedron',
			'TruncatedIcosidodecahedron',
			'SnubDodecahedron',
			'SmallStellatedDodecahedron',
			'GreatDodecahedron',
			'GreatStellatedDodecahedron'
		];
		
		var i, body;
		var offsetX = 0.0;
		var offsetY = 0.0;
		for (i = 1; i <= names.length; i++) {
			body = JSM.GenerateSolidWithRadius (names[i - 1], 1.0);
			OffsetOneBody (body, offsetX, offsetY, 0.0);
			model.AddBody (body);
			
			offsetX = offsetX + 2.5;
			if (i % 7 == 0) {
				offsetY = offsetY + 2.5;
				offsetX = 0.0;
			}
		}

		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/solids.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var materials = new JSM.Materials ();
		materials.AddMaterial (new JSM.Material ({ambient : 0x993333, diffuse : 0x993333}));
		materials.AddMaterial (new JSM.Material ({ambient : 0x008ab8, diffuse : 0x008ab8}));

		var body1 = JSM.GenerateCuboid (1, 1, 1);
		body1.GetPolygon (1).SetMaterialIndex (0);	
		body1.GetPolygon (5).SetMaterialIndex (1);	
		body1 = JSM.CatmullClarkSubdivision (body1, 1);

		var body2 = JSM.GenerateCuboid (1, 1, 1);
		body2.GetPolygon (1).SetMaterialIndex (0);	
		body2.GetPolygon (5).SetMaterialIndex (1);
		body2 = JSM.CatmullClarkSubdivision (body2, 2);

		var body3 = JSM.GenerateCuboid (1, 1, 1);
		body3.GetPolygon (1).SetMaterialIndex (0);	
		body3.GetPolygon (5).SetMaterialIndex (1);	
		body3 = JSM.CatmullClarkSubdivision (body3, 3);

		var body4 = JSM.GenerateCuboid (1, 1, 1);
		body4.GetPolygon (1).SetMaterialIndex (0);	
		body4.GetPolygon (5).SetMaterialIndex (1);	
		body4 = JSM.CatmullClarkSubdivision (body4, 4);

		OffsetTwoBodies (body2, body3, 0.6, 0.0, 0.0);
		OffsetTwoBodies (body1, body4, 1.8, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		model.AddBody (body3);
		model.AddBody (body4);
		RenderModel (viewer, model, materials, renderFinished);
	}, 'references/generator/subdivision.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var materials = new JSM.Materials ();
		materials.AddMaterial (new JSM.Material ({ambient : 0x993333, diffuse : 0x993333}));
		materials.AddMaterial (new JSM.Material ({ambient : 0x008ab8, diffuse : 0x008ab8}));

		var body1 = JSM.GenerateCuboid (0.5, 1.0, 1.5);
		body1.GetPolygon (1).SetMaterialIndex (0);	
		body1.GetPolygon (5).SetMaterialIndex (1);	
		body1 = JSM.CatmullClarkSubdivision (body1, 1);

		var body2 = JSM.GenerateCuboid (0.5, 1.0, 1.5);
		body2.GetPolygon (1).SetMaterialIndex (0);	
		body2.GetPolygon (5).SetMaterialIndex (1);
		body2 = JSM.CatmullClarkSubdivision (body2, 2);

		var body3 = JSM.GenerateCuboid (0.5, 1.0, 1.5);
		body3.GetPolygon (1).SetMaterialIndex (0);	
		body3.GetPolygon (5).SetMaterialIndex (1);	
		body3 = JSM.CatmullClarkSubdivision (body3, 3);

		var body4 = JSM.GenerateCuboid (0.5, 1.0, 1.5);
		body4.GetPolygon (1).SetMaterialIndex (0);	
		body4.GetPolygon (5).SetMaterialIndex (1);	
		body4 = JSM.CatmullClarkSubdivision (body4, 4);

		OffsetTwoBodies (body2, body3, 0.6, 0.0, 0.0);
		OffsetTwoBodies (body1, body4, 1.8, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		model.AddBody (body3);
		model.AddBody (body4);
		RenderModel (viewer, model, materials, renderFinished);
	}, 'references/generator/subdivision2.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var materials = new JSM.Materials ();
		materials.AddMaterial (new JSM.Material ({ambient : 0x993333, diffuse : 0x993333}));
		materials.AddMaterial (new JSM.Material ({ambient : 0x008ab8, diffuse : 0x008ab8}));

		var basePolygon = [
			new JSM.Coord (-0.5, -0.5, 0.0),
			new JSM.Coord (0.5, -0.5, 0.0),
			new JSM.Coord (0.5, 0.5, 0.0),
			new JSM.Coord (0.0, 0.5, 0.0),
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (-0.5, 0.0, 0.0)
		];
		var direction = new JSM.Coord (0.0, 0.0, 1.0);

		var body1 = JSM.GeneratePrism (basePolygon, direction, 1.0, true, null);
		body1.GetPolygon (1).SetMaterialIndex (0);	
		body1.GetPolygon (5).SetMaterialIndex (1);	
		body1 = JSM.CatmullClarkSubdivision (body1, 1);

		var body2 = JSM.GeneratePrism (basePolygon, direction, 1.0, true, null);
		body2.GetPolygon (1).SetMaterialIndex (0);	
		body2.GetPolygon (5).SetMaterialIndex (1);
		body2 = JSM.CatmullClarkSubdivision (body2, 2);

		var body3 = JSM.GeneratePrism (basePolygon, direction, 1.0, true, null);
		body3.GetPolygon (1).SetMaterialIndex (0);	
		body3.GetPolygon (5).SetMaterialIndex (1);	
		body3 = JSM.CatmullClarkSubdivision (body3, 3);

		var body4 = JSM.GeneratePrism (basePolygon, direction, 1.0, true, null);
		body4.GetPolygon (1).SetMaterialIndex (0);	
		body4.GetPolygon (5).SetMaterialIndex (1);	
		body4 = JSM.CatmullClarkSubdivision (body4, 4);

		OffsetTwoBodies (body2, body3, 0.6, 0.0, 0.0);
		OffsetTwoBodies (body1, body4, 1.8, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		model.AddBody (body3);
		model.AddBody (body4);
		RenderModel (viewer, model, materials, renderFinished);
	}, 'references/generator/subdivision3.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();
	
		var body1 = JSM.GenerateSphere (0.5, 20, false);
		var plane1 = JSM.GetPlaneFromCoordAndDirection (new JSM.Coord (0.0, 0.0, 0.3), new JSM.Vector (0.0, 0.0, -1.0));
		body1 = JSM.CutBodyByPlane (body1, plane1);

		var body2 = JSM.GenerateSphere (0.6, 20, false);
		var plane2 = JSM.GetPlaneFromCoordAndDirection (new JSM.Coord (0.0, 0.0, 0.3), new JSM.Vector (0.0, -1.0, -1.0));
		body2 = JSM.CutBodyByPlane (body2, plane2);

		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);
		
		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/cut_body.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		function GenerateBodyFromHull (coords)
		{
			var body = new JSM.Body ();
			var hull = JSM.ConvexHull3D (coords);

			var i;
			for (i = 0; i < coords.length; i++) {
				body.AddVertex (new JSM.BodyVertex (coords[i]));
			}
			
			for (i = 0; i < hull.length; i++) {
				body.AddPolygon (new JSM.BodyPolygon (hull[i]));
			}

			return body;
		}

		var model = new JSM.Model ();

		var body1 = GenerateBodyFromHull ([
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (1.0, 0.0, 0.0),
			new JSM.Coord (1.0, 1.0, 0.0),
			new JSM.Coord (0.0, 1.0, 0.0),
			new JSM.Coord (0.0, 0.0, 0.5),
			new JSM.Coord (0.5, 0.5, 0.75),
			new JSM.Coord (0.0, 1.0, 1.0)
		]);

		var body2 = GenerateBodyFromHull ([
			new JSM.Coord (0.0, 0.0, 0.0),
			new JSM.Coord (1.0, 0.0, 0.0),
			new JSM.Coord (1.0, 1.0, 0.0),
			new JSM.Coord (0.0, 1.0, 0.0),
			new JSM.Coord (0.0, 0.0, 1.0),
			new JSM.Coord (1.0, 0.0, 1.0),
			new JSM.Coord (1.0, 1.0, 1.0),
			new JSM.Coord (0.0, 1.0, 1.0)
		]);
		
		OffsetTwoBodies (body1, body2, 0.6, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/convex_hull.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var body1 = JSM.GenerateLegoBrick (2, 3, true, true, true, 25, true);
		var body2 = JSM.GenerateLegoBrick (3, 4, false, true, true, 15, false);
		
		OffsetTwoBodies (body1, body2, 1.4, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/lego.png');	

	canvasTester.AddTest (generatorSuite, function (renderFinished) {
		var model = new JSM.Model ();

		var basePoints = [
			new JSM.Coord (0, 0, 0),
			new JSM.Coord (1, 0, 0),
			new JSM.Coord (1.1, 0.4, 0),
			new JSM.Coord (1.1, 0.6, 0),
			new JSM.Coord (1, 1, 0),
			new JSM.Coord (0, 1, 0),
			new JSM.Coord (-0.1, 0.6, 0),
			new JSM.Coord (-0.1, 0.4, 0)
		];
		
		var direction = new JSM.Vector (0.0, 0.0, 1.0);
		var body1 = JSM.GeneratePrism (basePoints, direction, 0.3, true, 160 * JSM.DegRad);
		
		var basePoints = [
			new JSM.Coord (0, 0, 0),
			new JSM.Coord (1, 0, 0),
			new JSM.Coord (1.1, 0.4, 0),
			new JSM.Coord (1.1, 0.6, 0),
			new JSM.Coord (1, 1, 0),
			new JSM.Coord (0, 1, 0),
			new JSM.Coord (-0.1, 0.6, 0),
			new JSM.Coord (-0.1, 0.4, 0),
			null,
			new JSM.Coord (0.2, 0.2, 0),
			new JSM.Coord (0.1, 0.4, 0),
			new JSM.Coord (0.1, 0.6, 0),
			new JSM.Coord (0.2, 0.8, 0),
			new JSM.Coord (0.8, 0.8, 0),
			new JSM.Coord (0.9, 0.6, 0),
			new JSM.Coord (0.9, 0.4, 0),
			new JSM.Coord (0.8, 0.2, 0)
		];
		
		var direction = new JSM.Vector (0.0, 0.0, 1.0);
		var body2 = JSM.GeneratePrismWithHole (basePoints, direction, 0.3, true, 150 * JSM.DegRad);

		OffsetTwoBodies (body1, body2, 0.8, 0.0, 0.0);

		model.AddBody (body1);
		model.AddBody (body2);
		RenderModel (viewer, model, null, renderFinished);
	}, 'references/generator/prism_with_hole_curved.png');	

}

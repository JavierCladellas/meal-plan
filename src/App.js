import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MealPlan from './components/MealPlan';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Groceries from './components/Groceries';

const recipes = require('./data/recipes.json')
const photos = require('./data/meal_photos.json')

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Switch>
          <Route exact path="/">
            <MealPlan recipes = {recipes} photos={photos}/>
          </Route>
          <Route path="/meal-plan">
            <MealPlan recipes = {recipes} photos={photos}/>
          </Route>
          <Route path="/recipes">
            <Recipes recipes = {recipes} photos={photos}/>
          </Route>
          <Route path="/groceries">
            <Groceries recipes = {recipes}/>
          </Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;

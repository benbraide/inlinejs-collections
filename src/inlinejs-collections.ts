import { GetGlobal, WaitForGlobal } from '@benbraide/inlinejs';

import { CartCollectionConcept } from './concept/cart';
import { FavoritesCollectionConcept } from './concept/favorites';

import { CartDirectiveHandlerCompact } from './directive/cart';
import { FavoritesDirectiveHandlerCompact } from './directive/favorites';

import { CartMagicHandlerCompact } from './magic/cart';
import { FavoritesMagicHandlerCompact } from './magic/favorites';

WaitForGlobal().then(() => {
    const cartCollection = new CartCollectionConcept(GetGlobal().CreateComponent(document.createElement('template')));
    const favCollection = new FavoritesCollectionConcept(GetGlobal().CreateComponent(document.createElement('template')));
    
    GetGlobal().SetConcept(cartCollection.GetName(), cartCollection);
    GetGlobal().SetConcept(favCollection.GetName(), favCollection);

    CartDirectiveHandlerCompact();
    FavoritesDirectiveHandlerCompact();

    CartMagicHandlerCompact();
    FavoritesMagicHandlerCompact();
});
